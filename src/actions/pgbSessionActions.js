import * as pgb from 'utils/pgb';

export function pgbLoginRequested() {
  return {
    type: 'PGB_LOGIN_REQUESTED',
  };
}

export function pgbLoginReceived(accessToken) {
  return {
    type: 'PGB_LOGIN_RECEIVED',
    accessToken,
  };
}

export function pgbLogoutRequested(accessToken) {
  return {
    type: 'PGB_LOGOUT_REQUESTED',
  };
}

export function pgbLogoutReceived() {
  return {
    type: 'PGB_LOGOUT_RECEIVED',
  };
}

export function pgbAppsRequested() {
  return {
    type: 'PGB_APPS_REQUESTED',
  };
}

export function pgbAppsReceived(apps) {
  return {
    type: 'PGB_APPS_RECEIVED',
    apps,
  };
}

export function pgbCreateAppRequested() {
  return {
    type: 'PGB_CREATE_APP_REQUESTED',
  };
}

export function pgbCreateAppReceived(app) {
  return {
    type: 'PGB_CREATE_APP_RECEIVED',
    app,
  };
}

export function fetchApps(accessToken) {
  return (dispatch) => {
    dispatch(pgbAppsRequested());

    return pgb.fetchApps(accessToken)
    .then((apps) => {
      console.log(`${apps.length} apps found`);
      dispatch(pgbAppsReceived(apps));
    });
  };
}

export function login() {
  return (dispatch) => {
    dispatch(pgbLoginRequested());

    return pgb.login()
    .then((accessToken) => {
      dispatch(pgbLoginReceived(accessToken));
    });
  };
}

export function createSampleApp(accessToken) {
  return (dispatch) => {
    dispatch(pgbCreateAppRequested());

    return pgb.createSampleApp(accessToken)
    .then((app) => {
      dispatch(pgbCreateAppReceived(app));
    });
  };
}