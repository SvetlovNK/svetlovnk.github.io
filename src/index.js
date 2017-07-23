import Model from './model';
import View from './view';
import Controller from './controller';
import { save, load } from './helpers';

const state = load();

const model = new Model(state);
model.on('change', state => save(state || undefined));

const view = new View();
const controller = new Controller(model, view);

