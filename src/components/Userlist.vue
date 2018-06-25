<template>
  <div id="app">
 <div id="wrapper">
  <div class="topbar">
    <div class="topbar-left"> <img src="src/assets/images/left_logo.png" border="0" ></div>
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
        <ul class="nav navbar-nav navbar-left">
          <li>
            <button class="button-menu-mobile open-left"> <i class="zmdi zmdi-menu"></i> </button>
          </li>
          <li>
            <h4 class="page-title">Dashboard</h4>
          </li>
        </ul>
      </div>
      <!-- end container -->
    </div>
    <!-- end navbar -->
  </div>
  <!-- Top Bar End -->
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left side-menu">
    <div class="sidebar-inner slimscrollleft">
      <!-- User -->
      <div class="user-box">
        <div class="user-img"> <img src="src/assets/images/avatar-1.jpg" alt="user-img" title="Mat Helme" class="img-circle img-thumbnail img-responsive">
          <div class="user-status offline"><i class="zmdi zmdi-dot-circle"></i></div>
        </div>
        <h5><a href="#">Mat Helme</a> </h5>
        <ul class="list-inline">
          <li> <a href="#" > <i class="zmdi zmdi-settings"></i> </a> </li>
          <li> <router-link :to="'/logout'" class="text-custom"> <i class="zmdi zmdi-power"></i> </router-link> </li>
        </ul>
      </div>
      <!-- End User -->
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <ul>
          <li class="text-muted menu-title">Navigation</li>
          <li> <router-link class="waves-effect" :to="'/userlist'"><i class="zmdi zmdi-view-dashboard"></i> <span> Dashboard </span> </router-link> </li>
          
        </ul>
        <div class="clearfix"></div>
      </div>
      <!-- Sidebar -->
      <div class="clearfix"></div>
    </div>
  </div>
  <!-- Left Sidebar End -->
  <!-- ============================================================== -->
  <!-- Start right Content here -->
  <!-- ============================================================== -->
  <div class="content-page">   
    <!-- Start content -->
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="card-box">
              <h4 class="header-title m-t-0 m-b-30">Total Customer</h4>
              <div class="widget-box-2">
                <div class="widget-detail-2">
                  <h2 class="p-t-10 m-b-0"> 256 </h2>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card-box">
              <h4 class="header-title m-t-0 m-b-30">Total Device</h4>
              <div class="widget-box-2">
                <div class="widget-detail-2">
                  <h2 class="p-t-10 m-b-0"> 507 </h2>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card-box">
              <h4 class="header-title m-t-0 m-b-30">Total Account</h4>
              <div class="widget-box-2">
                <div class="widget-detail-2">
                  <h2 class="p-t-10 m-b-0"> 253 </h2>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card-box">
              <h4 class="header-title m-t-0 m-b-30">Active Custoer</h4>
              <div class="widget-box-2">
                <div class="widget-detail-2">
                  <h2 class="p-t-10 m-b-0"> 101 </h2>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- end row -->
        <!-- end row -->
        <!-- end row -->
        <div class="row">
          <!-- end col -->
          <div class="col-lg-12">
            <div class="card-box">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>AccountID</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr v-for="(customer,index) in customers">
                      <td>{{ index+1 }}</td>
                      <td>{{ customer.customer_name }}</td>
                      <td>{{ customer.customer_email }}</td>
                      <td>{{ customer.customer_account_id }}</td>
                      <td><span class="label label-danger" v-if="customer.customer_status == 0">Inactive</span>
                      <span class="label label-success" v-if="customer.customer_status == 1">Active</span></td>
                      <td><router-link :to="'edituser/'+customer.id+'/edit/'"> <i class="fa fa-edit"></i> Edit</router-link></td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			customers:[]
		}
	},
	created () {
		this.$http.get('getCustomersData')
		.then(response => {
			this.customers = response.body.response
		})
	},
	methods : {
		 
	}
}

</script>

