let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },

  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7KKUTcVU9eqDZZEy3g-qrJJWZZ546cv0';
    if (mode === 'signup') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7KKUTcVU9eqDZZEy3g-qrJJWZZ546cv0';
    }
    const response = await fetch(
      url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to login');
      throw error;
    }

    const expiresIn = +responseData.expiresIn * 1000; //with adding the '+' you are sure that it is a number
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
    })
  },

  //wanneer je inlogt wordt er een token en userId opgeslagen in de localStorage. Wanneer je switcht van pagina of de app verlaat en daarna weer terugkomt, wil je niet weer opnieuw hoeven inloggen.
  //Daarom moet je niet alleen de token en userId zetten (setItem), maar ook weer ophalen bij paginaswitch of na appverlaat weer terugkeren.
  //Daarvoor heb je 'getItem' nodig. Vandaar onderstaande functie die wordt aangeroepen in App.vue die bij refresh weer wordt aangesproken en dus onderstaande functie aanroept.
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn)

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      })
    }
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      userId: null,
      token: null,
    })
  },

  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};