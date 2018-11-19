'use strict';

const Subscription = require('egg').Subscription;


class MockData extends Subscription {
  static get schedule() {
    return {
      interval: '5s', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const res = await this.ctx.model.DeviceInfo.findAll({
      where: {
        kit_id: 6,
      },
      raw: true,
    });
    const len = res.length;
    if (len === 0) {
      return;
    }
    this.ctx.service.deal.dealdata(res);
  }
}

module.exports = MockData;
