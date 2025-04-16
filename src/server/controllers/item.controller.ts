import { Request, Response } from 'express';
import { jsonResponseService } from '../services/jsonResponse/jsonResponse.service';
import { Item } from '../database/models/item.model';

const itemController = {
    getItems: async (req: Request, res: Response): Promise<void> => {
        const items = await Item.findAll();
        jsonResponseService.returnSuccess(
            {
                items: items.map((item) => ({
                    id: item.id,
                    name: item.name,
                    expiryDate: item.expiry_date,
                })),
            },
            res,
        );
    },
    getItem: async (req: Request, res: Response): Promise<void> => {
        const itemId = parseInt(req.params.id, 10);
        if (!itemId || itemId < 1) {
            jsonResponseService.returnResponse(404, 'Item not found.', res);
            return;
        }

        const item = await Item.findByPk(itemId);
        if (!item) {
            jsonResponseService.returnResponse(404, 'Item not found.', res);
            return;
        }

        jsonResponseService.returnSuccess(
            {
                item: {
                    id: item.id,
                    name: item.name,
                    expiryDate: item.expiry_date,
                },
            },
            res,
        );
    },
    createItem: async (req: Request, res: Response): Promise<void> => {
        const { name, expiryDate } = req.body;
        if (!name || !expiryDate) {
            jsonResponseService.returnResponse(400, 'Missing parameters.', res);
            return;
        }

        await Item.create({
            name,
            expiry_date: expiryDate,
        });

        jsonResponseService.returnResponse(200, name + ' successfully created.', res);
    },
    updateItem: async (req: Request, res: Response): Promise<void> => {
        const { id, name, expiryDate } = req.body;
        if (!id || !name || !expiryDate) {
            jsonResponseService.returnResponse(400, 'Missing parameters.', res);
            return;
        }
        const thisItem = await Item.findByPk(parseInt(id, 10));
        if (!thisItem) {
            jsonResponseService.returnResponse(400, 'Item not found.', res);
            return;
        }

        await thisItem.update({
            name,
            expiry_date: expiryDate,
        });
        await thisItem.save();
        jsonResponseService.returnResponse(200, name + ' successfully updated.', res);
    },
    deleteItem: async (req: Request, res: Response): Promise<void> => {
        const itemId = parseInt(req.params.id, 10);
        if (!itemId || itemId < 1) {
            jsonResponseService.returnResponse(404, 'Item not found.', res);
            return;
        }

        const item = await Item.findByPk(itemId);
        if (!item) {
            jsonResponseService.returnResponse(404, 'Item not found.', res);
            return;
        }
        const itemName = item.name;
        await item.destroy();
        jsonResponseService.returnResponse(200, itemName + ' successfully deleted.', res);
    },
};

export { itemController };
