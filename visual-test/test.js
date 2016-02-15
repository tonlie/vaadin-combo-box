var gemini = require('gemini');

gemini.suite('overview', function(suite) {
  suite.setUrl('/index.html').setCaptureElements('#container')
    .before(function(actions,find) {
      actions.waitForElementToShow('#input', 3000);
    })
    .capture('01-initial')
    .capture('02-opened', function(actions, find) {
      actions.tap(find('#toggleIcon'));
    })
    .capture('03-closed+selected', function(actions, find) {
      actions.tap(find('.item'));
    })
    .capture('04-opened+selected', function(actions, find) {
      actions.tap(find('#toggleIcon'));
    })
    .capture('05-closed', function(actions, find) {
      actions.tap(find('#clearIcon'));
    });
});

gemini.suite('overlay', function(suite) {
  suite.setUrl('/index.html').setCaptureElements('vaadin-combo-box-overlay')
    .before(function(actions,find) {
      actions.waitForElementToShow('#input', 3000);
    })
    .capture('01-opened', function(actions, find) {
      actions.tap(find('#toggleIcon'));
    })
    .capture('02-focused', function(actions, find) {
      actions.sendKeys(gemini.ARROW_DOWN);
    });
});

gemini.suite('icons', function(suite) {
  suite.skip('ios', 'mouse down not supported by touch devices')
  .setUrl('/index.html').setCaptureElements('#container')
    .before(function(actions,find) {
      actions.waitForElementToShow('#input', 3000);
    })
    .capture('01-toggle-ripple', function(actions,find) {
      actions.mouseDown(find('#toggleIcon'));
    })
    .capture('02-clear-ripple', function(actions,find) {
      actions.mouseUp(find('#toggleIcon'));
      actions.click(find('.item'));
      actions.click(find('#toggleIcon'));
      actions.mouseDown(find('#clearIcon'));
    })
    .after(function(actions, find) {
      // Firefox has issues when leaving the button down >:-)
      actions.mouseUp(find('#clearIcon'));
    });
});

gemini.suite('paper-input-alignment', function(suite) {
  suite.setUrl('/paper-input-alignment.html').setCaptureElements('#container')
    .before(function(actions,find) {
      actions.waitForElementToShow('#input');
    })
    .capture('01-initial');
});

gemini.suite('hover-styles', function(suite) {
  suite.skip(['ios'], 'cant hover with touch devices.')
  .setUrl('/index.html')
  .setCaptureElements('vaadin-combo-box-overlay')
  .before(function(actions,find) {
    actions.waitForElementToShow('#input', 3000);
  })
  .capture('01-item:hover', function(actions, find) {
    actions.click(find('#toggleIcon'));
    actions.mouseMove(find('.item'));
  });
});
