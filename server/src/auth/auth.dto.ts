import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '1234',
  })
  password: string;
}
export class SignInBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '1234',
  })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  iat: number;
  @ApiProperty()
  exp: number;
}
