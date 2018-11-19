'use strict';

const Service = require('egg').Service;
const Mock = require('mockjs');
const dayjs = require('dayjs');

class DealService extends Service {
  async dealdata(devices) {
    const start = parseInt(Date.parse(new Date()));
    const stop = start + 40 * 60000;
    let transaction;
    try {
      transaction = await this.ctx.model.transaction();
      for (const device of devices) {
        const write = Mock.mock({
          'have|1': true,
          'heart|1': true,
          'step|1': true,
        });
        if (!write.have) {
          continue;
        }
        if (write.heart) {
          for (let index = start; index < stop; index = index + 60000) {
            const mdata = Mock.mock({
              'heart|1': true,
              'rate|60-200': 100,
            });
            const time = dayjs(index).format('YYYY-MM-DD HH:mm');
            const timestr = dayjs(index).format('YYYYMMDDHHmm');

            if (mdata.heart) {
              const heartrate = {
                record_id: timestr + '93' + device.device_id,
                heartrate_value: mdata.rate,
                device_id: device.device_id,
                measure_time: time,
                create_time: new Date(),
              };
              const result = await this.ctx.model.DeviceStandHeartrate.create(heartrate, {
                transaction: this.ctx.getTran(),
              });
            }
          }
        }

        if (write.step) {
          for (let index = start; index < stop; index = index + 60000) {
            const mdata = Mock.mock({
              'step|1': true,
              'steps|60-200': 100,
            });
            const time = dayjs(index).format('YYYY-MM-DD HH:mm');
            const timestr = dayjs(index).format('YYYYMMDDHHmm');

            if (mdata.step) {
              const stepdata = {
                record_id: timestr + '81' + device.device_id,
                step_value: mdata.steps,
                device_id: device.device_id,
                measure_time: time,
                create_time: new Date(),
              };
              const result = await this.ctx.model.DeviceStandStep.create(stepdata, {
                transaction: this.ctx.getTran(),
              });
            }
          }
        }
      }
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();

      return false;
    }

  }
}

module.exports = DealService;
