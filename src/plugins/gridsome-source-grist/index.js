const axios = require("axios");

class GristSource {
  static defaultOptions() {
    return {
      apiKey: "",
      docId: "",
      tables: [],
      baseUrl: "https://docs.getgrist.com",
      typeName: "Grist",
    };
  }

  constructor(api, options) {
    this.api = api;
    this.options = { ...GristSource.defaultOptions(), ...options };
    this.client = axios.create({
      baseURL: this.options.baseUrl,
      headers: {
        Authorization: `Bearer ${this.options.apiKey}`,
      },
    });
  }

  async fetchTable(tableName) {
    try {
      const recordsResponse = await this.client.get(
        `/api/docs/${this.options.docId}/tables/${tableName}/records`,
        {
          params: {
            sort: this.options.sort,
            filter: this.options.filter,
            limit: this.options.limit,
          },
        }
      );

      const records = recordsResponse.data.records || [];

      return records.map((record) => ({
        ...record.fields,
        id: record.id,
      }));
    } catch (error) {
      console.error(
        `Error fetching table ${tableName}:`,
        error.response?.data || error.message
      );
      return [];
    }
  }

  async getData(actions) {
    const collections = {};

    for (const table of this.options.tables) {
      const typeName = table.typeName;
      const collection = actions.addCollection(typeName);

      const records = await this.fetchTable(table.name);

      for (const record of records) {
        const transformedRecord = Object.fromEntries(
          Object.entries(record).map(([key, value]) => {
            let newValue = value;
            // Remove "L" from arrays of relations
            if (Array.isArray(value)) newValue = value.filter((v) => v !== "L");
            return [key, newValue];
          })
        );

        collection.addNode({
          ...transformedRecord,
          id: record.id.toString(),
        });
      }

      collections[typeName] = collection;
    }

    if (this.options.relations) {
      this.createRelations(collections);
    }
  }

  createRelations(collections) {
    for (const relation of this.options.relations) {
      const { fromTable, toTable, foreignKey } = relation;

      if (collections[fromTable] && collections[toTable]) {
        collections[fromTable].addReference(foreignKey, toTable, {
          key: foreignKey,
        });
      }
    }
  }
}

module.exports = function (api, options) {
  api.loadSource(async (actions) => {
    const source = new GristSource(api, options);
    await source.getData(actions);
  });
};
