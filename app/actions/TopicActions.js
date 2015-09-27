import alt from 'altInstance';
import TopicWebAPIUtils from 'utils/TopicWebAPIUtils';

/*
 * Declaring TopicActions using ES2015. This is equivalent to creating
 * function TopicActions() {}
 * AND
 * TopicActions.prototype.create() = function(data) {}
 */
class TopicActions {

  /*
   * @param text that user wishes to save
   */
  create(obj) {
    // Remove whitespace
      // Using the current timestamp in place of a real id.
      const id = Date.now().toString();
      const data = {
        caseId: id,
        count: 1,
        organization: obj.organization,
        url: obj.url,
        organizationEmail: obj.organizationEmail,
        situation: obj.situation,
        userName: obj.userName,
        userEmail: obj.userEmail,
        imgUrl: obj.imgUrl,
        status: 'init'
      };

      // This dispatches for views to make optimistic updates
      this.dispatch(data);
      // Makes an additional call to the server API and actually adds the topic
      TopicWebAPIUtils.addTopic(data)
        .done(function success() {
          // We might not need to do anything it successfully added due to optimistic updates.
        })
        .fail(function failure() {
          // dispatch an event if fails to notify user that it has failed
        });
  }

  confirmcreate(caseId) {
    // this.dispatch(caseId);
    TopicWebAPIUtils.confirmTopic({caseId: caseId});
  }

  /*
   * @param String topic id to increment with
   */
  increment(id) {
    this.dispatch(id);

    TopicWebAPIUtils.updateTopic({ id: id }, false, true);
  }

  /*
   * @param String topic id to decrement with
   */
  decrement(id) {
    this.dispatch(id);

    TopicWebAPIUtils.updateTopic({ id: id }, false, false);
  }

  /*
   * @param String topic id to destroy
   */
  destroy(id) {
    this.dispatch(id);

    // Keeping it consistent with the above
    TopicWebAPIUtils.deleteTopic({id: id});
  }

  /*
   *  @param String text that user is typing in input field
   */
  typing(text) {
    this.dispatch(text);
  }

}

export default alt.createActions(TopicActions);
