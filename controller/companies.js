const companies = require("../models/companiesSchema");
const users = require("../models/usersSchema");

exports.getCompaniesByPage = async (req, res) => {
  try {
    const page = req.params.page;
    const limit = 20;
    const skip = (page - 1) * limit;
    const compa = await companies.find().skip(skip).limit(limit);
    res.status(200).json({ compa });
  } catch (error) {
    res.status(500).json({ message: "Error getting companies" });
  }
};

exports.getCompanyById = async (req, res) => {
    try {
        const id = req.params.id;
        const company = await companies.findById(id);
        res.status(200).json({ company });
    }
    catch (error) {
        res.status(500).json({ message: "Error getting company" });
    }
}

exports.createCompany = async (req, res) => {
    try {
        const company = await companies.create(req.body);
        res.status(200).json({ message: "Company created successfully", company });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating company" });
    }
}
exports.updateCompany = async (req, res) => {
    try {
        const id = req.params.id;
        const company = await companies.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Company updated successfully", company });
    } 
    catch (error) {
        res.status(500).json({ message: "Error updating company" });
    }
}

exports.deleteCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const company = await companies.findByIdAndDelete(id);
    res.status(200).json({ message: "Company deleted successfully", company });
  } catch (error) {
    res.status(500).json({ message: "Error deleting company" });
  }
}
