import Route from '@ember/routing/route';
import resetScrollPosition from '../mixins/reset-scroll-position';

export default Route.extend(resetScrollPosition,{

    model(params){
        var posts = this.modelFor('application');
        return posts.findBy('slug',params.slug)
    }
});
