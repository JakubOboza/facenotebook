exports.routes = function (map) {
    map.get('/', 'users#index');
    map.get('/login', "sessions#new");
    map.get('/logout', "sessions#destroy");
    map.resources('sessions');
    map.resources('users');
};
