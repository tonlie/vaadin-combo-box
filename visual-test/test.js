var gemini = require('gemini');

function captureButton(selector, suite) {
  suite.setCaptureElements(selector).capture('normal');
};

function captureButtonWithHoverAndClick(selector, suite) {
  captureButton(selector, suite);

  suite.capture('hovered', function(actions) {
      actions.mouseMove(selector);
    })
    .capture('pressed', function(actions) {
      actions.mouseDown(selector);
    })
    .capture('clicked', function(actions) {
      actions.mouseUp(selector);
    });
};

gemini.suite('overview', function(suite) {
  suite.setUrl('/index.html').setCaptureElements('#container')
    .capture('01-initial')
    .capture('02-input:hover', function(actions, find) {
      actions.mouseMove(find('#input'));
    })
    .capture('03-toggle:hover', function(actions, find) {
      actions.mouseMove(find('#toggleIcon'));
    })
    .capture('04-opened', function(actions, find) {
      actions.click(find('#toggleIcon'));
    })
    .capture('05-closed+selected', function(actions, find) {
      actions.click(find('.item'));
    })
    .capture('06-opened+selected', function(actions, find) {
      actions.click(find('#toggleIcon'));
    })
    .capture('07-clear:hover', function(actions, find) {
      actions.mouseMove(find('#clearIcon'));
    })
    .capture('08-closed', function(actions, find) {
      actions.click(find('#clearIcon'));
    });
});

gemini.suite('overlay', function(suite) {
  suite.setUrl('/index.html').setCaptureElements('vaadin-combo-box-overlay')
    .capture('01-opened', function(actions, find) {
      actions.click(find('#toggleIcon'));
    })
    .capture('02-hover', function(actions, find) {
      actions.mouseMove(find('.item'));
    });
});

gemini.suite('icons', function(suite) {
  suite.setUrl('/index.html').setCaptureElements('#container')
    .capture('01-toggle-ripple', function(actions,find) {
      actions.mouseDown(find('#toggleIcon'));
    })
    .capture('02-clear-ripple', function(actions,find) {
      actions.mouseUp(find('#toggleIcon'));
      actions.click(find('.item'));
      actions.click(find('#toggleIcon'));
      actions.mouseDown(find('#clearIcon'));
    });
});

gemini.suite('paper-input-alignment', function(suite) {
  suite.setUrl('/paper-input-alignment.html').setCaptureElements('#container')
    .capture('01-initial');
});
