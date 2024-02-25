export default class Validate {
  validateUsername(username) {
    this.username = username;
    const regexp = /^(?![-_\d])(?!.*-_)(?!.*[\d]{4,})[a-z\d_-]+(?<![-_\d])$/i;
    return regexp.test(this.username);
  }
}
