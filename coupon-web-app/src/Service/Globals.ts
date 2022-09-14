class Globals{

}

class DevGlob extends Globals {
    public urls = {
        imageApi : "http://localhost:8080/api/cats/images/",
        customerApi : "http://localhost:8080/customer/",
        companyApi : "http://localhost:8080/company/",
        adminApi : "http://localhost:8080/admin/",
        loginApi : "http://localhost:8080/login/",
        registerApi : "http://localhost:8080/register/",
    }
}

class ProdGlob extends Globals {
    public urls = {
        imageApi : "http://localhost:8080/api/cats/images/",
        customerApi : "http://localhost:8080/customer/",
        companyApi : "http://localhost:8080/company/",
        adminApi : "http://localhost:8080/admin/",
        loginApi : "http://localhost:8080/login/",
        registerApi : "http://localhost:8080/register/",
    }
}

const globals = process.env.NODE_ENV !== 'production' ? new ProdGlob() : new DevGlob();

export default globals;