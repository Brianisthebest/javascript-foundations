function createMaterial(name, unit, costPerUnit) {
  var material = {
    name: name,
    unit: unit,
    costPerUnit: costPerUnit
  };
  return material;
}

function calculateMaterialCost(material, amount) {
  var cost = material.costPerUnit * amount;
  return `${amount} ${material.unit}s of ${material.name} costs $${cost}.`;
}

function createSupplyCloset(supplies) {
  var supplyCloset = {
    supplies: []
  };
  if(supplies != null) {
    for(i = 0; i < supplies.length; i++) {
      supplyCloset.supplies.push(supplies[i].name)
    }
    return supplyCloset;
  } else {
    return supplyCloset;
  }
}

function addSupply(closet, supply) {
  if(closet.supplies.includes(supply.name) === false) {
    closet.supplies.push(supply.name)
    return closet.supplies;
  } else {
    return `You already have ${supply.name} in your closet!`
  }
}

function createNewProject(materialsNeeded, status = 'not started') {
  var project = {
    materialsNeeded: materialsNeeded,
    status: status
  };
  return project;
}

function compareMaterials(project, closet) {
  for(let i = 0; i < project.materialsNeeded.length; i++) {
    if(closet.supplies.includes(project.materialsNeeded[i].name) === true) {
    } else {
      return `Oh no! You need to go shopping before you can start this project!`;
    }
  }
  return `Yay! You can start this project!`;
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}