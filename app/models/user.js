//User.validatesPresenceOf('name', 'surname', 'photo_url', 'position')
var crypto = require('crypto');


User.prototype.gravatar_url = function(){
  var md5 = crypto.createHash('md5');
  var user = this;
  if(user.email){
    md5.update(user.email);
    var hash = md5.digest('hex');
    return "http://www.gravatar.com/avatar/" + hash;
  }else{
    return null;
  }
}
