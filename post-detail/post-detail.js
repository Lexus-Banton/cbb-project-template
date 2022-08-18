import { getPost} from '..fetch-utils.js';



const postDetailCOntainer = document.querySelector('.post-detail-container');

const params = new URLSearchParams(window.location.search);

async function loadData() {
    const data = await getPost(parms.get('id'));
    const postDiv = render
}
