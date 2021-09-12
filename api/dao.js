const getSlug = require('./utils/getSlug');

class DAO {
  /**@type {import('mongodb').Collection<Document>} */
  static #collection;

  /**@param {import('mongodb').Collection<Document>} collection*/
  static initCollection(collection) {
    this.#collection = collection;
  }
  /**
   * To Check if Slug exists in any of the Document inside the collection.
   * @param {string} slug
   * @return {Promise<Boolean>} true if Slug exists in the Document, false otherwise.
   */
  static async isSlugExist(slug) {
    return (await this.#collection.findOne({ slug })) !== null;
  }
  /**
   * Get Code against the slug, or false if it doesn't exist
   * @param {string} slug
   * @return {Promise<string | false>}
   */
  static async getCode(slug) {
    return (await this.#collection.findOne({ slug }))?.code || false;
  }
  /**
   * Insert the code into the Collection and get the Slug in return
   * @param {string} code
   * @return string | false
   */
  static async insertCode(code) {
    let slug;
    do {
      slug = getSlug();
    } while (await DAO.isSlugExist(slug));
    let document = await this.#collection.insertOne({
      slug,
      code,
      createdAt: new Date(),
    });
    return document ? slug : false;
  }
}

module.exports = DAO;
