import { Controller, Request, Get, Post, Render, UseGuards, Header } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private authService: AuthService, private appService: AppService) {
  }

  @Get("auth/login")
  @Render("login")
  index() {
    return { message: "Login page" };
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  @Render("index")
  root() {
    return { message: "Hello my friend" };
  }
}
