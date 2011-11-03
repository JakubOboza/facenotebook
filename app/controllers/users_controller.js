load('application');

before(loginRequired, {only: ['new', 'create', 'destroy']});

action('index', function () {
  this.title = "VIP's list";
  User.find(function (err, users) {
        this.users = users;
        render();
  }.bind(this));
});

action('new', function () {
    this.user = new User;
    this.title = 'New person';
    render();
});

action('create', function () {
    this.user = new User;
    ['name', 'surname', 'position', 'phone', 'email'].forEach(function (field) {
        if (typeof body[field] !== 'undefined') {
            this.user[field] = body[field];
        }
    }.bind(this));
    this.user.save(function (errors) {
        if (errors) {
            this.title = 'New person';
            flash('error', 'Could not add person to database');
            render('new');
        } else {
            flash('info', 'Person added');
            redirect(path_to.users);
        }
    }.bind(this));
});

action('show', function(){
  User.findById(params.id, function(err, user){
    if(err || !user){
      send({});
    }
    else{
      send(user);
    }
  });
});

action('destroy', function () {
    User.findById(params.id, function(err, user){
      if(err || !user){
        redirect("/");
      }else{
        user.remove(function(error){
          if(error){
            redirect("/");
          }else{
            redirect("/");
          }
        });
      }
    });
});



function loginRequired () {
  if(request.session["logged_in"] == true){
    next();
  }else{
    redirect("/login");
  }
}
