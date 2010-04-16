// ==========================================================================
// Project:   Hedwig.DemoPanel
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Hedwig */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Hedwig.SourcePanel = SC.PanelPane.extend(
/** @scope Hedwig.DemoPanel.prototype */ {
  defaultResponder: Hedwig,
  layout: { top: 0, bottom: 0, width: 768, centerX: 0 },
  contentView: null,
  theme: "pig",
  contentView: SC.WorkspaceView.design({
    topToolbar: SC.ToolbarView.design({
      layout: { top: 0, height: 44, left: 0, right: 0 },
      childViews: "close source".w(), // not "closed" source-- close & source
      close: SC.ButtonView.design({
        layout: { left: 7, centerY: 0, height: 30, width: 100 },
        title: "Close",
        action: "closeSource",
        controlSize: SC.AUTO_CONTROL_SIZE,
        isCancel: YES
      }),

      source: SC.ButtonView.design({
        layout: { right: 7, centerY: 0, height: 30, width: 100 },
        title: "Demo",
        action: "showDemo",
        controlSize: SC.AUTO_CONTROL_SIZE,
        isDefault: YES
      })
    }),
    contentView: SC.ScrollView.design({
      classNames: "source".w(),
      borderStyle: SC.BORDER_NONE,
      contentView: SC.StaticContentView.design({
        classNames: "source".w(),
        contentBinding: "Hedwig.demoController.preparedSource"
      })
      
    })
  })
});