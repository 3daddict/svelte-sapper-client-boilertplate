<script>
    import { goto, stores } from '@sapper/app';
    import Button from '../../components/UI/Button.svelte';

    function onSubmit() {
        goto('/')
    }
</script>

<style>
    .dashboard-wrapper {
        display: flex;
        flex-direction: row;
        height: calc(100vh - 49px);
    }

    .dash-section {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .dash {
        margin: 0 24px;
    }

    .picture {
        height: 120px;
        width: 100%;
        overflow: hidden;
        background-image: url('https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1980');
        background-position: center;
        background-size: cover;
        filter: grayscale(100%);
        opacity: 0.8;
    }

    .dash img {
        width: 120px;
        margin: 32px 0;
    }

    hr {
        margin: 0;
        border: 1px solid #E0E0E0;
        width: 56px
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        margin: 32px 0 24px;
    }

    .dash p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #9E9E9E;
        margin-bottom: 32px;
    }

    @media (min-width: 769px) {
        .dash-section {
            flex-direction: row;
        }
        .dash-section .item {
            flex: 1;
        }
        .picture {
            height: auto;
        }
    }

</style>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="dashboard-wrapper">
    <div class="aside" style="display: none;">
        <p>One Day this will be the Sidebar</p>
    </div>
    <div class="dash-section">
        <div class="item picture"></div>
        <div class="item dash">
            <img class="logo" src="https://picsum.photos/seed/picsum/200/200" alt="Platform Login Logo" loading="lazy" width="120">
            <hr />
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam similique assumenda nostrum et maxime ad! Pariatur non provident sequi esse maiores delectus. Aperiam, distinctio quae!</p>
        <Button 
            mode="button"
            color="primary-outline"
            type="button" 
            on:click={onSubmit}
            >START OVER</Button>
        </div>
    </div>
</div>