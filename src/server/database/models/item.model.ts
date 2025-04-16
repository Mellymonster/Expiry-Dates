import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize';

class Item extends Model<InferAttributes<Item>, InferCreationAttributes<Item>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare expiry_date: string;
}

const initItemModel = (sequelize: Sequelize): void => {
    Item.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            expiry_date: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Item',
        },
    );

    Item.sync();
};

export { initItemModel, Item };
