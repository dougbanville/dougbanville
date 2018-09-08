import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.map(obj=>{
            obj.title = obj.title.rendered;
            obj.content = obj.content.rendered;
            obj.excerpt = obj.excerpt.rendered;
            obj.image = obj.better_featured_image.source_url;
            obj.squareThumb = obj.better_featured_image.media_details.sizes.thumbnail.source_url;
            obj.gatewayPageImage = obj.better_featured_image.media_details.sizes["gateway-page-image"].source_url
        });

        payload = {
            post: payload
        }

        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
