import { Component } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
import { DataServices } from "../../services/data";

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    providers: [DataServices],
    selector : "segment",
    template : `
	<div class="ui masthead vertical segment">
    <div class="ui container">
	<h1>Segment</h1>
	<p>Semantic UI segment element <i class="icon external"></i>
	<a href="http://semantic-ui.com/elements/segment.html" target="_blank">Semantic UI Segment</a></p>
    </div>
</div>
<div class="main ui container">
    <h4 class="ui header">Demo</h4>
    <sm-segment class="raised">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>

    <h4 class="ui header">Code</h4>
 <div class="ui form">
	<div class="field">
<textarea rows="2" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-segment class="raised">...</sm-segment>
</textarea>
	</div>
      </div>

      <h4 class="ui header">Demo stacked</h4>
    <sm-segment class="stacked">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</sm-segment>

    <h4 class="ui header">Demo circular</h4>
    <sm-segment class="circular">
	<h2 class="ui header">
	    Buy Now
	    <div class="sub header">$10.99</div>
	</h2>
    </sm-segment>

    <h4 class="ui header">Demo compact</h4>
    <sm-segment class="compact">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>

    <h4 class="ui header">Demo aligned</h4>
    <sm-segment class="right aligned">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>

    <h4 class="ui header">Demo colored</h4>
    <sm-segment class="red">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>
    <sm-segment class="blue">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>

    <h4 class="ui header">Demo inverted</h4>
    <sm-segment class="inverted green">
	<p>
	    Pellentesque habitant morbi tristique senectus et netus et malesuada.
	</p>
    </sm-segment>

    <br/><br/>
      Page source: <a target="_blank"
      href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/segment.ts">
	https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/segment.ts
      </a>
</div>
`
})

export class SegmentComponent {}
