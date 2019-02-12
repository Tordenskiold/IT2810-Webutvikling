import Store from '../../Store';

//Jest test for Store.js
//Testing the rendering of the functions in Store.js

//Unit test which tests the changing of the pages
it('testing changePage', () => {
    const appstore = new Store();
    appstore.changePage(1);
    expect(appstore.searchParams.page).toEqual(1);
    appstore.changePage(-1);
    expect(appstore.searchParams.page).toEqual(0);
});

//Unit test for saving data in the search parameters
it('testing onSelect', () => {
    const appstore = new Store();
    appstore.onSelect('query', 0, 'rosvik');
    expect(appstore.searchParams.query).toEqual('rosvik');
});

//Unit test for checking if the function adds the data into results array
it('testing pushData', () => {
    const appstore = new Store();
    appstore.pushData([{}]);
    expect(appstore.results).toHaveLength(1);
});

//Unit test for checking if the function replaces the data into results array
it('testing setData', () => {
    const appstore = new Store();
    appstore.setData([{}]);
    expect(appstore.results).toHaveLength(1);
});

//Unit test for checking if the function asks the api and takes the results from the querry and saves the data into results array
it('testing databaseSearch', () => {
    const appstore = new Store();
    appstore.databaseSearch();
    expect(appstore.results).toHaveLength(0);
});



