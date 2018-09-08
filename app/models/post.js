import DS from 'ember-data';
import EmberObject, { computed } from '@ember/object';

export default DS.Model.extend({

    slug: DS.attr("string"),
    title : DS.attr("string"),
    content : DS.attr("string"),
    image: DS.attr("string"),
    squareThumb: DS.attr("string"),
    gatewayPageImage: DS.attr("string"),
    excerpt : DS.attr("string"),
    bgImage: computed("image",function(){
        let image = this.get("image");
        return Ember.String.htmlSafe(`style="background:url(${image});"`);
    })

});
