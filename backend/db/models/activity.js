'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    icon: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Activity.associate = function (models) {
    // associations can be defined here

    let hostingMapping = {
      through: 'Activities_List',
      foreignKey: 'activities_id',
      otherKey: 'hostings_id'
    };

    Activity.belongsToMany(models.Hosting, hostingMapping);

    // Activity.belongsTo(models.Activities_List, { foreignKey: 'activities_id' })
    // Activity.belongsTo(models.Hosting, { foreignKey: 'hostings_id' });
  };
  return Activity;
};
