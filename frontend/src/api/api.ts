import Cookies from "universal-cookie";
import Furniture from "../models/furniture";

class api {
  public source = `http://127.0.0.1:51000`;

  public async xfetch(path: string, method: string, body?: any) {
    return (
      await fetch(this.source + path, {
        method: method,
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      })
    ).json();
  }

  public authPath(path: string, secret_token: string) {
    return path + "?secret_token=" + secret_token;
  }

  public auth(path: string) {
    const cookies = new Cookies();
    const secret_token = cookies.get("token");

    return this.authPath(path, secret_token);
  }

  public async signup(email: string, password: string) {
    const r = await this.xfetch("/signup", "POST", {
      email: email,
      password: password,
    });
    return r && r.message && r.message === "Signup successful";
  }

  public async login(email: string, password: string) {
    const r = await this.xfetch("/login", "POST", {
      email: email,
      password: password,
    });
    if (r && r.token) {
      const cookies = new Cookies();
      cookies.set("token", r.token);
      return true;
    }
    return false;
  }

  public logout() {
    const cookies = new Cookies();
    cookies.remove("token");
    return true;
  }

  public async tableGetById(id: string) {
    return await this.xfetch("/api/table/" + id, "GET");
  }

  public async tableGetAll() {
    return await this.xfetch("/api/table", "GET");
  }

  public async tableNew(table: Furniture) {
    return await this.xfetch(this.auth("/api/table"), "POST", table);
  }

  public async tableEdit(id: string, table: Partial<Furniture>) {
    return await this.xfetch(this.auth("/api/table/" + id), "PUT", table);
  }

  public async tableDelete(id: string) {
    return await this.xfetch(this.auth("/api/table/" + id), "DELETE");
  }

  public async cupboardGetById(id: string) {
    return await this.xfetch("/api/cupboard/" + id, "GET");
  }

  public async cupboardGetAll() {
    return await this.xfetch("/api/cupboard", "GET");
  }

  public async cupboardNew(cupboard: Furniture) {
    return await this.xfetch(this.auth("/api/cupboard"), "POST", cupboard);
  }

  public async cupboardEdit(id: string, cupboard: Partial<Furniture>) {
    return await this.xfetch(this.auth("/api/cupboard/" + id), "PUT", cupboard);
  }

  public async cupboardDelete(id: string) {
    return await this.xfetch(this.auth("/api/cupboard/" + id), "DELETE");
  }

  public async chairGetById(id: string) {
    return await this.xfetch("/api/chair/" + id, "GET");
  }

  public async chairGetAll() {
    return await this.xfetch("/api/chair", "GET");
  }

  public async chairNew(chair: Furniture) {
    return await this.xfetch(this.auth("/api/chair"), "POST", chair);
  }

  public async chairEdit(id: string, chair: Partial<Furniture>) {
    return await this.xfetch(this.auth("/api/chair/" + id), "PUT", chair);
  }

  public async chairDelete(id: string) {
    return await this.xfetch(this.auth("/api/chair/" + id), "DELETE");
  }
}

export default api;
