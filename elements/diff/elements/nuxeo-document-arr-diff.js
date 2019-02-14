/**
@license
(C) Copyright Nuxeo Corp. (http://nuxeo.com/)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
`nuxeo-document-arr-diff`
@group Nuxeo UI
@element nuxeo-document-arr-diff
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { DiffBehavior } from '../nuxeo-diff-behavior.js';
Polymer({
  _template: html`
    <style include="nuxeo-diff-styles">
      :host {
        @apply --layout-horizontal;
      }
    </style>
    <template is="dom-if" if="[[displayLabel]]">
      <div class="label">
        <span style\$="[[_computeIndentStyle(level, isArrayItem)]]">[[_computeLabel(property, label)]]</span>
      </div>
    </template>
    <div class="value simple">
      <!-- arrays with inner changes -->
      <template is="dom-if" if="[[_hasArrayInnerChanges(delta)]]">
        <div class="array diff simple">
          <template is="dom-repeat" items="[[_getArrayDelta(delta, originalValue, newValue, hideAdditions, hideDeletions)]]" as="arrdelta">
            <template is="dom-if" if="[[_showArrayItem(arrdelta, showAll)]]">
              <div class\$="item [[arrdelta.change]]">
                <nuxeo-document-diff delta="[[arrdelta.value]]" original-value="[[arrdelta.originalValue]]" new-value="[[arrdelta.newValue]]" unified="[[unified]]" schema="[[_getPropertySchema(schema, property)]]" type="document" show-all="[[showAll]]" level="[[level]]" hide-deletions="[[hideDeletions]]" hide-additions="[[hideAdditions]]" label="[[arrdelta.index]]:" is-array-item="" display-label=""></nuxeo-document-diff>
              </div>
            </template>
          </template>
        </div>
      </template>
      <!-- array with no changes -->
      <template is="dom-if" if="[[_hasNoChanges(delta, originalValue)]]">
        <template is="dom-if" if="[[_isArray(delta)]]">
          <div class="array simple">
            <template is="dom-repeat" items="[[originalValue]]" as="value">
              <div class="item">
                <nuxeo-document-diff original-value="[[value]]" schema="[[_getPropertySchema(schema, property)]]" type="document" unified="[[unified]]" show-all="[[showAll]]" level="[[level]]" hide-deletions="[[hideDeletions]]" hide-additions="[[hideAdditions]]" label="[[index]]:" is-array-item="" display-label=""></nuxeo-document-diff>
              </div>
            </template>
          </div>
        </template>
      </template>
    </div>
`,

  is: 'nuxeo-document-arr-diff',
  behaviors: [DiffBehavior]
});
