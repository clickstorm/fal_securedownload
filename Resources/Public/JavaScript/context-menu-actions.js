/**
 * JavaScript to handle the click action of the "FalSecuredownload" context menu item
 * Used in TYPO3 >= v12
 */
class ContextMenuActions {
  static getReturnUrl() {
    return encodeURIComponent(top.list_frame.document.location.pathname + top.list_frame.document.location.search)
  }

  static folderPermissions(table, uid, additionalAttributes) {
    var folderRecordUid = additionalAttributes['folderRecordUid'] || 0;

    if (folderRecordUid > 0) {
      top.TYPO3.Backend.ContentContainer.setUrl(
        top.TYPO3.settings.FormEngine.moduleUrl
        + '&edit[tx_falsecuredownload_folder][' + parseInt(folderRecordUid, 10) + ']=edit'
        + '&returnUrl=' + ContextMenuActions.getReturnUrl()
      );
    } else {
      top.TYPO3.Backend.ContentContainer.setUrl(
        top.TYPO3.settings.FormEngine.moduleUrl
        + '&edit[tx_falsecuredownload_folder][0]=new'
        + '&defVals[tx_falsecuredownload_folder][storage]=' + additionalAttributes['storage']
        + '&defVals[tx_falsecuredownload_folder][folder]=' + additionalAttributes['folder']
        + '&defVals[tx_falsecuredownload_folder][folder_hash]=' + additionalAttributes['folderHash']
        + '&returnUrl=' + ContextMenuActions.getReturnUrl()
      );
    }
  }
}

export default ContextMenuActions;
