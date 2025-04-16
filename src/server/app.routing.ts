import express, { Express } from 'express';
import path from 'path';

// routes
import { itemController } from './controllers/item.controller';

// Routing
const useAppRouting = (app: Express): void => {
    app.get('/api/items', itemController.getItems);
    app.get('/api/items/:id', itemController.getItem);
    app.post('/api/items', itemController.createItem);
    app.put('/api/items', itemController.updateItem);
    app.get('/api/items/delete/:id', itemController.deleteItem);

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'src', 'web', 'home.html'));
    });

    app.get('/items', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'src', 'web', 'items.html'));
    });

    app.get('/items/create', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'src', 'web', 'itemCreate.html'));
    });

    app.get('/items/:id', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'src', 'web', 'itemEdit.html'));
    });
};

export { useAppRouting };
