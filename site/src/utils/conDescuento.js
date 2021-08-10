const toThounsand = require("./toThounsand");

module.exports = (precio,descuento) => (precio -(descuento * precio /100).toFixed(0));