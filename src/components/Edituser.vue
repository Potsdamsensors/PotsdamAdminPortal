<template>
<div id="app">
  <div id="wrapper">
    <div class="topbar">
      <div class="topbar-left"> <a href="index.html" class="logo"><span>Post<span>dam</span></span><i class="zmdi zmdi-layers"></i></a> </div>
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
            <li> <a href="#" class="text-custom"> <i class="zmdi zmdi-power"></i> </a> </li>
          </ul>
        </div>
        <!-- End User -->
        <!--- Sidemenu -->
        <div id="sidebar-menu">
          <ul>
            <li class="text-muted menu-title">Navigation</li>
            <li>
              <router-link class="waves-effect" :to="'/userlist'"><i class="zmdi zmdi-view-dashboard"></i> <span> Dashboard </span> </router-link>
            </li>
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
            <div class="col-sm-12">
              <div class="card-box">
                <h4 class="header-title m-t-0 m-b-30">Customer Details</h4>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <form class="form-horizontal" role="form">
                      <div class="form-group">
                        <label class="col-md-2 control-label">Name</label>
                        <div class="col-md-10">
                          <input type="text" class="form-control" name="customer.customer_name" v-model="customer.customer_name" value="" placeholder="Enter Name">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label" for="example-email">Email</label>
                        <div class="col-md-10">
                          <input type="email" name="customer_email" v-model="customer.customer_email" class="form-control" placeholder="Enter Email">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label" for="example-email">Account ID</label>
                        <div class="col-md-10">
                          <input type="text" name="customer_account_id" v-model="customer.customer_account_id" class="form-control" placeholder="Enter Account ID">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label" for="example-email">Status</label>
                        <div class="col-md-10">
                          <input type="radio" v-model="customer.customer_status" value="0" :checked="customer.customer_account_id == 0">
                          Inactive
                          <input type="radio" v-model="customer.customer_status" value="1" :checked="customer.customer_account_id == 1">
                          Active </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 control-label"></label>
                        <div class="col-md-10">
                          <button type="button" @click="update"  class="btn waves-effect waves-light btn-primary">Update</button>
                          <router-link class="btn waves-effect waves-light btn-danger" :to="'/userlist'">Back</router-link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
            </div>
            <!-- end col -->
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card-box">
                <h4 class="header-title m-t-0 m-b-30">Device Details</h4>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Device ID</th>
                            <th>Subscription</th>
                            <th>Subscription Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(device,index) in devices">
                            <td>{{ index+1 }}</td>
                            <td>{{ device.device_id }}</td>
                            <td>{{ device.name }}</td>
                             <td>{{ device.subscription_date }}</td>
                            <td><span class="label label-danger" v-if="device.device_status == 'Indoor'">Indoor</span> 
                            <span class="label label-success" v-if="device.device_status == 'Outdoor'">Outdoor</span></td>
                            <td><router-link :to="'edituser/'+device.id+'/edit/'"> <i class="fa fa-edit"></i> Edit</router-link></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <!-- container -->
      </div>
      <!-- content -->
    </div>
  </div>
</div>
</template>
<script>
export default {

  created () {
    this.getCustomer()
  },
  data () {
    return {
       customer:{},
       devices:[]
    }
  },
  methods :  {
      getCustomer () {
      
      var postdata = {
              id:this.$route.params.customerid
        }
        this.$http.post('getCustomer',postdata)
        .then(responce => {
          this.customer = responce.body.response.customer_details
          this.devices =  responce.body.response.device_details
        })
       },
      update () {
          //swal("Updated!","Customer details has been  updated!","success");
          this.$http.put('updateCustomerData/'+this.$route.params.customerid, this.customer)
              .then(response => {
                if(response.body.error == false) {
                this.customers = response.body.response
                 swal("Updated!",response.body.message,"success");
                } else {
                swal("Error !",response.body.message,"error");
                }
             })
       }    
  }
}

</script>
