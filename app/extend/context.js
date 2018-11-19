'use strict';

const tran = Symbol('Context#tran');

module.exports = {
  err({
    code,
    data = null,
    msg = '请求成功',
  }) {
    this.throw(code, msg, {
      data,
    });
  },
  async tran() {
    if (!this[tran]) {
      this[tran] = await this.app.model.transaction();
    }
    return this[tran];
  },
  getTran() {
    return this[tran];
  },
};
