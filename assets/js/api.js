
"use strict";

window.ACCESS_POINT = " https://api.edamam.com/api/recipes/v2";
const /**{String} */ APP_ID = "8e989869";
const /**{String} */ API_KEY = "f172c82b565df1dcfa9ff2b3f2607a73";
const /**{String} */ TYPE = "public";

/**
 * 
 * @param {Array} queries  Query array
 * @param {Function} successCallback Success callback fuction
 */

export const fetchData = async function (queries, successCallback)  { 
  const /**{String} */ query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

    const /**{String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const /**{Object} */ response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}

