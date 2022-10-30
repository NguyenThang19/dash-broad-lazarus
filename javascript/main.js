$(document).ready(function () {
    var boxChart = $('.container-chart');
    // Get data storage
    var storageDesign = 200;
    var storageUsed = 150;
    var storageAvailable = storageDesign - storageUsed;
    var variableStorageElement = `<p class="custom-content-chartStorage"><span>${storageUsed} MB</span><span>${storageDesign} MB</span></p>`
    boxChart.append(variableStorageElement);
    handdleChartStorage();
    function handdleChartStorage() {
        const chartStorage = document.getElementById('chart-storage').getContext('2d');
        const myChart = new Chart(chartStorage, {
            type: 'doughnut',
            data: {
                // labels: ['storogeUsed','availability'],
                datasets: [{
                    data: [storageUsed, storageAvailable],
                    backgroundColor: [
                        '#FFEE00',
                        '#FFFFFF'
                    ],
                    cutout: '80%',
                }]
            },
            options: {
            }
        });
    }
});


// --------------------------------------------------------------------------------------------------------------
// Side bar Script
$(document).ready(function () {
    document.querySelector('.btn-toggle-side-bar').addEventListener('click', function () {
        $('.side-bar').removeClass('transToHiddenSidebar');
        $('.side-bar ').addClass('transToShowSidebar');
    });
    document.querySelector('.side-bar .icon-hide-sideBar').addEventListener('click', function () {
        $('.side-bar ').removeClass('transToShowSidebar');
        $('.side-bar ').addClass('transToHiddenSidebar');
    });

    $('.side-bar .menu-side-bar .side-bar-items').click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})