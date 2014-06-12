exports.handleMessage = function (hook, context, cb) {
  var msg = context.message;

  if(!msg || !msg.data) {
      return cb();
  }

  if(msg.data.type === 'USERINFO_UPDATE' ||
     msg.data.type === 'CLIENT_MESSAGE' && msg.data.payload && msg.data.payload.type === 'suggestUserName') {
    cb(null); // drop all name or color changes
  } else {
    cb();
  }
};

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + "<link href='../static/plugins/ep_block_userchanges/static/css/pad2.css' rel='stylesheet'>";
  return cb();
};
