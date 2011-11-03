exports.routes = function (map) {
    map.get('/', 'users#index');
    map.resources('users');
};
