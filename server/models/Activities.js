module.exports = (sequelize, DataTypes) => {

    const Activities = sequelize.define("Activities",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        streak: {
            type: DataTypes.INTEGER,
        },
        start_time: {
            type: DataTypes.DATE,
        },
        end_time: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.STRING,
            default: "to do"
        }
    
    });

    return Activities;


}