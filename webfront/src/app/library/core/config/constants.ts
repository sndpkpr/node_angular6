import { Injector } from '@angular/core';
import { Environment } from '../../../../environments/environment';
import { CookieService } from 'ngx-cookie';


const injector = Injector.create([{ provide: Environment, useClass: Environment, deps: [] }]);
export const applicationBaseUrl: string = injector.get(Environment).baseUrl;
export const cloudinaryBaseUrl: string = injector.get(Environment).cloudinaryBaseUrl;

// Global Keys.
export const GlobalConst = {
  GooglePlacesKey: 'AIzaSyA7RoPDglj4z3-vhg1h1F_C1rB2fQ1Pq9k',
  _googleTranslateApiKey: 'AIzaSyDNcZhFnEZcTsszVEIv-UbNX0R1Aa6VRI4',
  mapData: {
    latitude: -33.868699,
    longitude: 151.209147,
    zoom: 15
  },
  countryDefaultLocation: {
    Japan: { latitude: -26.146609, longitude: 28.22223800000006, location: 'Emperors Palace, Japan' },
    HongKong: { latitude: 36.844460, longitude: 100.189819, location: 'Qinghai Lake,china' },
    China: { latitude: 36.75990290000001, longitude: 100.34978950000004, location: 'Qinghai Lake,china' },
    Qatar: { latitude: 25.288105, longitude: 51.52400190000003, location: 'c.Trinity Talent Qatar, Banks Street, Doha, Qatar' },
    Thailand: { latitude: 13.7466293, longitude: 100.5387581, location: 'Level 29, The Offices at Centralworld, Bangkok 10330' },
    Malaysia: { latitude: 3.16, longitude: 101.71720000000005, location: 'Level 36, Menara Citibank 50450, Kuala Lumpur' },
    Singapore: { latitude: 1.2953167, longitude: 103.8595421, location: 'Level 42, Suntec Tower 3, Singapore 038988' },
    USA: { latitude: 38.89944469999999, longitude: -77.0401951, location: '1717 Pennsylvania Avenue, Washington, DC 20006' },
    NewZealand: { latitude: -36.8433291, longitude: 174.76533859999995, location: 'Level 27, PwC Tower, Auckland 1010' },
    Kuwait: { latitude: 29.3635053, longitude: 47.96614239999997, location: 'Level 18, Sahab Tower Salhia, Kuwait City' },
    Bahrain: {
      latitude: 26.241309, longitude: 50.59203100000002,
      location: 'Level 13, Diplomatic Commercial Offices Tower, Manama, Bahrain'
    },
    SaudiArabia: {
      latitude: 24.7135517, longitude: 46.67529569999999,
      location: 'Level 18, Al Faisaliah Center, King Fahd Road, Olaya District, Riyadh, Saudi Arabia'
    },
    Australia: { latitude: -33.8687636, longitude: 151.2090293, location: 'MLC center Sydney NSW Australia' },
  },
  lang: '',
  // Used to provide 'Exclusive benefit' to selected users
  itkeEmail: 'Servcorp@itkexp.com',
  tlcEmail: 'TLC@servcorpcommunity.com',
  jethroEmail: 'jethro.clayton@servcorp.com.au',
  sussaneEmail: 's.macphillamy@gmail.com',
  charlesRobinsonEmail: 'charles.robinson@servcorp.com',
  melusineheyvaertEmail: 'Melusine.heyvaert@servcorp.be',
  EmmaleneWysockiEmail: 'Emmalene.Wysocki@servcorp.com.au',
  ServcorpCommunityEmail: 'community@servcorp.com',
  GuidEmpty: '00000000-0000-0000-0000-000000000000',
  TlcBenefitID: 'd8f749ca-f1f4-e711-80d2-000d3aa1e60f', // Live
  DataSaveSuccessfully: 'Data Saved Successfully',
  uploadedsuccessfully: 'uploaded successfully',
  UnauthorizedAccess : 'Unauthorized Access',
  minContentCountThreshold: 2000,
  TrinetBenefitKeyId: 167,
  JetsmarterKeyId: 171,
  PinnedPostCommunityEmailQC : 'community@smservcorp.com',
  PinnedPostCommunityEmailLV : 'community@servcorp.com',
  VeroServcorpLocationId : '692346aa-75fe-e611-80c5-000d3aa1e60f',
  MaldivesBenefitIdLive: 'a107f890-d996-e811-80da-000d3aa1e60f',
  MaldivesBenefitIdQC: '41836d0d-f296-e811-80da-000d3aa1e60f',
  UsCountryId: 'd6db489e-75fe-e611-80c5-000d3aa1e60f',
  ServcorpHomeMergingIDQC: 'b66273a3-e4ac-e811-80db-000d3aa1e60f',
  ServcorpHomeMergingIDLive: 'a9368f71-f9ac-e811-80db-000d3aa1e60f',
  TrinetBenefitID: '2b7dcb25-7328-e811-80d4-000d3aa1e60f',
  EtihadBenefitID: '271aee38-c453-e811-80d5-000d3aa1e60f'
};

// moment date format constants.
export const momentConst = {
  dateFormatForEventAndPost: 'DD MMM h:mma',
  dateFormatForEventWithoutHours: 'DD MMM',
  dateFormatForCommunityEventWithoutHours: 'MMM DD',
  dateFormatForCommunityEventOnlyDate: 'DD',
  dateFormatForCommunityEventWithYear: 'YYYY MMM DD',
  dateFormatForPostWithYear: 'DD MMM YYYY h:mma',
  dateFormatForEventDetail: 'MMM DD YYYY h:mm a',
  dateFormatForPostFeedMessages: 'DD MMM YYYY',
  dateFormatForPostFeedMessagesNoYear: 'DD MMM'
};

// error handler contstants
export enum StatusCode {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InteralServerError = 500
}
export enum GlobalDatabaseObjects {
  Individual_Dashboard_Feed_Post = 22,
  Post_Like = 2,
  Post_Comment = 3,
  Post_Others_Comment = 15,
  Comment_reply = 19,
  Same_Comment_Reply = 21,
  Comment_Like = 20,
  Connection_Post = 10
}
export const StatusMessage = {
  Ok: 'OK (Deleted, GET , UPDATED)',
  Created: 'Created (CREATED)',
  BadRequest: 'Bad Request (MISSING REQUIED INFO)',
  Unauthorized: 'Unauthorized (AUTHENTICATION REQUIRED)',
  Forbidden: 'Forbidden (YOU ARE NOT AUTHORIZED TO ACCESS)',
  NotFound: '404 Not Found (RECORD NOT FOUND)',
  InteralServerError: '500 Internal Server Error (DATABASE ERROR, CONNECTION,MISC SERVER ISSUE)'
};
// Core API Urls
export const CoreAPIURLs = {
  loginUrl: 'api/Account/token',
  getuserDetailsByUserNameUrl: 'api/Account/GetuserDetailsByUserName',
  getCategoryListUrl: 'api/common/getCategoryList',
  getGroupListUrl: 'api/common/getGroupList',
  getEventListUrl: 'api/common/getEventList',
  getDiscussionListUrl: 'api/common/getDiscussionList',
  uploadImageToCloudinary: 'api/cloudinary/uploadImageToCloudinary',
  uploadFile: 'api/Facilitator/upload',
  deactivateBulkUser: '/api/Facilitator/uploadDeactivatingUser',
  getAllConnectionByIdForTagging: 'api/common/getAllConnectionByIdForTagging',
  generateSignatureForCloudinary: 'api/cloudinary/generateSignatureForCloudinary'
};
export const PlaceholderImagePaths = {
  noImageURL: 'api/Account/token'
};
export enum GlobalNumbers {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  ELEVEN = 11,
  TWELVE = 12,
  THIRTEEN = 13
}

export const CountryName = {
  Japan: 'Japan',
  USA: 'USA'
};

export const NotificationFilterType = {
  Event: 1,
  Benefit: 4,
  Product: 9
};
