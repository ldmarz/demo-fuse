import mockData from './mockData.json';
import fuse from 'fuse-operators';

class TestComponentController {
  constructor() {
    'ngInject';
    this.poolData = mockData;
    this.noKey = [];
    this.dynamicItems = [];
    this.generateItems();
  }

  generateItems() {
    this.dynamicItems = mockData;
  }

  fuseSearch() {
    this.dynamicItems = fuse(this.search, this.poolData);
  }
}

export const testComponent = {
  template: require('./testComponent.html'),
  controller: TestComponentController,
};
