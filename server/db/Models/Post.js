module.exports = (sequelize, type) => {
  return sequelize.define('post', {
    title: {
      type: type.STRING,
      allowNull: false,
    postHoodId: {
      type: type.INTEGER,
      allowNull: false,
      // references: {
      //   model: Hood,
      //   key: 'id'
      // }
    },
    postTypeId: {
      type: type.INTEGER,
      allowNull: false,
      unique: true
    },
    postBody: {
      type: type.TEXT,
      allowNull: false,
    },
    postVotes: {
      type: type.INTEGER,
      allowNull: false
    }
  });
};