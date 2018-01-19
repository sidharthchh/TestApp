import axios from 'axios';
import cookie from 'react-cookie';



const MEETING_LIST_URL = "https://37121bd7.ngrok.io/api/v2/meetings/";

const TOKEN = "JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MiwiZW1haWwiOiJzYXJhbC5uaWdhbUBoYXNoZWRpbi5jb20iLCJleHAiOjE1MTY5OTIxODF9.SJC3HfEQIvL81y36PesGQrMziP-Iwa2XrTgGHmSbYUXFwRA-7qGzfaIP_Rk9HIkv9QVm7yLzLjXWE1uPmRNaQupeRQB8WAm7_JBNercndv2KNaPP6zdqhj9EwmTsVcvQI7OQjQgeWgZvMt5hkJBhi8Ie_RFZJwVp3QwF-BQs1pGb6_avi6zGoIMwOLI3h0jDTonuIyed1PYwrN3TzGpxnDDA3PuIWPvSz17fs6UO6FVQAG_hPhXEzr4xoNqFp2PHTzT314OWBh9OaRwEKP8swvi5QNMvBVJ7bv8ORVQWN-HDBAvL1KQDOXuSwm6LdUft5KngayBFW3WdrZvCSG4y6Q"


class APIService {
  constructor() {
    this.cookie = {};
    this.defaultConfig = {
      timeout: 20000,
      crossDomain: true,
      responseType: 'json',
      withCredentials: true,
    };

    this.apiUrls = {
      'getMeetings': '/api/v2/meetings/'
    };
  }

  checkOrGetCookie(key) {
    if (!this.cookie[key]) {
      this.cookie[key] = cookie.load(key);
    }
    return this.cookie[key];
  }

  get(url, params = {}, config = this.defaultConfig) {
    // TODO: If config is passed use that to override default config
    axios.defaults.headers.common['Authorization'] = 'JWT ' + TOKEN;

    return axios({
      ...config,
      url: url,
      method: 'get',
      params: params,
      headers: { 'Authorization': TOKEN }
    });
  }


  post(url, data, config = this.defaultConfig) {
    const csrftoken = this.checkOrGetCookie('csrftoken');
    if (csrftoken) {
      return axios({
        ...config,
        url: url,
        method: 'post',
        headers: { 'X-CSRFTOKEN': csrftoken },
        data: data
      });
    }

    return axios({
      url: url,
      method: 'post',
      data: data
    });
  }

  delete(url, data, config = this.defaultConfig) {
    const csrftoken = this.checkOrGetCookie('csrftoken');
    if (csrftoken) {
      return axios({
        ...config,
        url: url,
        method: 'delete',
        headers: { 'X-CSRFTOKEN': csrftoken },
        data: data
      });
    }

    return axios({
      url: url,
      method: 'delete',
      data: data
    });
  }

  patch(url, data, config = this.defaultConfig) {
    const csrftoken = this.checkOrGetCookie('csrftoken');

    if (csrftoken) {
      return axios({
        ...config,
        url: url,
        method: 'patch',
        headers: { 'X-CSRFTOKEN': csrftoken },
        data: data
      });
    }

    return axios({
      url: url,
      method: 'patch',
      data: data
    });
  }

  // V1 APIs
  getMeetings(params) {
    return this.get(MEETING_LIST_URL, {});
  }

  getMeetingDetails(meetingUUID) {
    return this.get(`https://37121bd7.ngrok.io/api/v2/meeting-data/${meetingUUID}/`, {});
  }


}

export const apiService = new APIService();
