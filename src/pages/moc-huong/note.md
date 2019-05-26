# Step to build a page

## Prepare JSON data
 - define data you need at redux/moc-huong/mock-data.json
## Create an action( function ) to get data from mock-data
 - define your action in redux/moc-huong/reducer.js
## Update state
 - append function reducer in redux/moc-huong/reducer.js
## Create a view (component)
 - goto pages/moc-huong, then create a jsx page 
## Get data from store
 ```
 const mapStateToProps = (state) => {
    return {
        displayData: state.mocHuong,
    }
 }
const mapDispatchToProps = dispatch => {
    return {
        getDataFromStore: () => dispatch(getData())
    }
}
```
## Transfer data to view (component)
