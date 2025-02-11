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
        // HACK TO LOWERCASE THE FIRST LETTER (temporary)
        const transformedRecord = Object.fromEntries(
          Object.entries(record).map(([key, value]) => {
            const newKey = key.charAt(0).toLowerCase() + key.slice(1);
            let newValue = value;
            // REMOVE WEIRD VALUE "L" FROM ARRAYS OF RELATIONS
            if (Array.isArray(value)) newValue = value.filter((v) => v !== "L");
            return [newKey, newValue];
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
        const originalKey =
          foreignKey.charAt(0).toUpperCase() + foreignKey.slice(1);
        collections[fromTable].addReference(foreignKey, toTable, {
          key: originalKey, // Use original key for looking up references
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
