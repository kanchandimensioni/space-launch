export default {
  getLaunchList: (page, filters) => {
    let listEndPoint = `/launches/?page=${page}`;
    console.log('filters', filters );
    if (filters.launchSuccess !== null) {
      listEndPoint += `&launch_success=${filters.launchSuccess}`;
    }
    if (filters.landSuccess !== null) {
      listEndPoint += `&land_success=${filters.landSuccess}`;
    }
    if (filters.launchYear) {
      listEndPoint += `&launch_year=${filters.launchYear}`;
    }
    console.log(listEndPoint);
    return listEndPoint;
  }
   
}
