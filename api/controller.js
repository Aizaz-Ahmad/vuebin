const DAO = require('./dao');
class Controller {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getCode(req, res) {
    const { slug } = req.params;
    const code = await DAO.getCode(slug);
    if (code) return res.status(200).json({ code: code });
    return res.status(404).json({ message: `Invalid Url` });
  }
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async postCode(req, res) {
    const { code } = req.body;
    let slug = await DAO.insertCode(code);
    if (slug) {
      res.status(200).json({ slug });
    } else res.status(500).json({ message: 'Error Inserting Code' });
  }
}

module.exports = Controller;
