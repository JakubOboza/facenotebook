var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    UserSchema        = new Schema
  ;

UserSchema.add({
    name:           { type: String,   index: true },
    surname:        { type: String    },
    position:       { type: String    },
    phone:          { type: String    },
    email:          { type: String    },
    created_at:     { type: Date,     default: Date}
});
mongoose.model("User", UserSchema);

['User'].forEach(function (m) {
    module.exports[m] = mongoose.model(m);
});
