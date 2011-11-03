load('application');

action('new', function(){
  render({title: "Login"});
});

action('create', function(){
  if(body["password"] == "password"){
    request.session["logged_in"] = true;
    redirect("/");
  }else{
    redirect("/login");
  }
});

action('destroy', function(){
  request.session["logged_in"] = undefined;
  redirect("/")
});
